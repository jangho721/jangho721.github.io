---
layout: post
title: Encoding Categorical Variables
date: 2025-08-30 00:00:00
description: Converting Categorical Variables into Numerical Values
tags: Artificial_Intelligence
categories: Tech_Notes
thumbnail: assets/img/9.jpg
images:
  lightbox2: true
  photoswipe: true
  spotlight: true
  venobox: true
---

Most machine learning algorithms accept only **numerical input**, so categorical variables need to be converted to numeric values.

<br>

<h3 style="font-weight: 400; margin-bottom: 30px;">Main encoding methods</h3>
<ul>
  <li style="margin-bottom: 10px;"><b>Ordinal Encoding</b>: converts categories into ordered values (0,1,2,…).
    <ul>
      <li style="margin-top: 10px;"><i>Drawback</i>: creates ordinal relationships between categories that are actually unrelated, potentially lowering model performance or causing unexpected issues.</li>
    </ul>
  </li>
  <li style="margin-bottom: 10px;"><b>One-Hot Encoding</b>: creates a 0/1 variable for each category.
    <ul>
      <li style="margin-top: 10px;"><i>Drawback</i>: increases dimensionality as the number of categories grows, potentially degrading training performance.</li>
    </ul>
  </li>
  <li style="margin-bottom: 10px;"><b>Target Encoding</b>: converts categories into target statistics (focus of this note).</li>
</ul>

<br>

<h3 style="font-weight: 400; margin-bottom: 30px;">Target Encoding (Mean Encoding)</h3>
<ul>
  <li style="margin-bottom: 10px;">Converts categories into <b>target statistics</b>.
    <ul>
      <li style="margin-top: 10px;">Binary classification: probability of 1 within each category.</li>
      <li>Regression: target mean within each category.</li>
    </ul>
  </li>
  <li style="margin-bottom: 10px;"><b>Advantages:</b> no increase in dimensionality, avoids artificial ordinal relationships.</li>
  <li style="margin-bottom: 10px;"><b>Extensions:</b> higher moments such as variance, skewness, or kurtosis can also be used.</li>
</ul>

<br>

<div style="margin-left: 20px;">
  <h5 style="font-weight: 400;">a. Smoothing</h5>
  <p style="margin-left: 25px;">Mitigates extreme values for categories with few samples.</p>
  
  <ul>
    <li>Formula:</li>
  </ul>
  
  $$
  encoding = \alpha \cdot p(t=1 \mid x=c_i) + (1-\alpha) \cdot p(t=1)
  $$
  
  <ul>
    <li>α calculation:</li>
  </ul>
  
  $$
  \alpha = \frac{1}{1 + e^{-(n-k)/f}}
  $$

  <div style="margin-left: 40px;">
    <p><i>where:</i></p>
    <div style="margin-left: 25px;">
      f = Smoothing factor<br> 
      k = Minimum samples per leaf
    </div>
  </div>
</div>

<br>

<div style="margin-left: 20px;">
  <h5 style="font-weight: 400;">b. Target Leakage</h5>
  <p style="margin-left: 25px;">Using the target variable in encoding can lead to <b>overfitting</b>.</p>
  <ul>
    <li style="margin-bottom: 10px;">Mitigation methods:
      <ul>
        <li style="margin-top: 10px; margin-bottom: 10px;"><b>Leave-One-Out Target Encoding</b>: exclude the target value of the current sample.</li>
        <li style="margin-bottom: 10px;"><b>Leave-One-Fold-Out</b>: exclude the fold that the current sample belongs to.</li>
        <li style="margin-bottom: 10px;"><b>Smoothing</b>: acts as regularization.</li>
      </ul>
    </li>
  </ul>
</div>

<br>

<div style="margin-left: 20px;">
  <h5 style="font-weight: 400;">c. scikit-learn TargetEncoder</h5>
  <p style="margin-left: 25px;"><b>TargetEncoder</b> uses the <b>Leave-One-Fold-Out</b> method by default to reduce target leakage.</p>
  <p style="margin-left: 25px;">The number of folds can be adjusted using the <code>cv</code> parameter (default=5).</p>
  <p>1. Categorical Target Encoding Formula</p>
  <ul>
    <li style="margin-bottom: 10px;">The encoding value for category <b>i</b> is calculated as:
      <p>
        $$
        S_i = \lambda_i \frac{n_i^Y}{n_i} + (1-\lambda_i) \frac{n^Y}{n}
        $$
      </p>
      <ul>
        <li><b>S<sub>i</sub></b>: encoded value for category i</li>
        <li><b>n<sub>i</sub><sup>Y</sup></b>: number of samples with Y=1 in category i</li>
        <li><b>n<sup>Y</sup></b>: total number of samples with Y=1</li>
        <li><b>n<sub>i</sub></b>: total samples in category i</li>
        <li><b>n</b>: total number of samples</li>
        <li style="margin-top: 10px;"><b>&lambda;<sub>i</sub></b>: shrinkage factor</li>
      </ul>
      <p>
        $$
        \lambda_i = \frac{n_i}{n_i + m}
        $$
      </p>
      <ul>
        <li><b>m</b>: smoothing parameter (default = "auto")</li>
        <<li>If using the default "auto", $m = \sigma_i^2 / \tau^2$, <br>
          where $\sigma_i^2$ is the variance of the target in category i, <br>
          and $\tau^2$ is the variance of the target across all samples
        </li>
      </ul>
    </li>
  </ul>
</div>
