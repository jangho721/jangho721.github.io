---
layout: post
title: Encoding Categorical Variables
date: 2025-08-03 00:00:00
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

## 1. Main encoding methods
 
<ul>
  <li><u><i>Ordinal Encoding</i></u>: Converts categories into ordered values (0,1,2,…)
    <ul>
      <li><u><i>Drawback:</i></u> Creates ordinal relationships between categories that are actually unrelated, potentially lowering model performance or causing unexpected issues.</li>
    </ul>
  </li>

  <li><u><i>One-Hot Encoding</i></u>: Creates a 0/1 variable for each category
    <ul>
      <li><u><i>Drawback:</i></u> Increases dimensionality as the number of categories grows, potentially degrading training performance.</li>
    </ul>
  </li>

  <li><u><i>Target Encoding</i></u>: Converts categories into target statistics (focus of this note)</li>
</ul>

<br>

## 2. Target Encoding (Mean Encoding)

<ul>
  <li><u><i>Target Encoding</i></u>: Converts categories into <b>target statistics</b>
    <ul>
      <li>Binary classification: probability of 1 within each category.</li>
      <li>Regression: target mean within each category.</li>
    </ul>
  </li>

  <li><u><i>Advantages</i></u>: No increase in dimensionality, avoids artificial ordinal relationships.</li>

  <li><u><i>Extensions</i></u>: Higher moments such as variance, skewness, or kurtosis can also be used.</li>
</ul>

<br>

<div style="margin-left: 40px;">

<h4>2-1. Smoothing</h4>
<p>Mitigates extreme values for categories with few samples</p>

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

</div>
