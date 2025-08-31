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

<h3 style="font-weight: 400; margin-bottom: 30px;">Main encoding methods</h3>
<ul>
  <li style="margin-bottom: 10px;"><b>Ordinal Encoding</b>: Converts categories into ordered values (0,1,2,…).
    <ul>
      <li><i>Drawback</i>: Creates ordinal relationships between categories that are actually unrelated, potentially lowering model performance or causing unexpected issues.</li>
    </ul>
  </li>
  <li style="margin-bottom: 10px;"><b>One-Hot Encoding</b>: Creates a 0/1 variable for each category.
    <ul>
      <li><i>Drawback</i>: Increases dimensionality as the number of categories grows, potentially degrading training performance.</li>
    </ul>
  </li>
  <li style="margin-bottom: 10px;"><b>Target Encoding</b>: Converts categories into target statistics (focus of this note).</li>
</ul>

<br>

<h3 style="font-weight: 400; margin-bottom: 30px;">Target Encoding (Mean Encoding)</h3>
<ul>
  <li style="margin-bottom: 10px;">Converts categories into <b>target statistics</b>.
    <ul>
      <li>Binary classification: probability of 1 within each category.</li>
      <li>Regression: target mean within each category.</li>
    </ul>
  </li>
  <li style="margin-bottom: 10px;"><b>Advantages:</b> No increase in dimensionality, avoids artificial ordinal relationships.</li>
  <li style="margin-bottom: 10px;"><b>Extensions:</b> Higher moments such as variance, skewness, or kurtosis can also be used.</li>
</ul>

<br>

<div style="margin-left: 20px;">

<h5 style="font-weight: 400;">• Smoothing</h5>
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
