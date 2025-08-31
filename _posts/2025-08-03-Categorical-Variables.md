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

- **Ordinal Encoding**: Converts categories into ordered values (0,1,2,…)
  - **Drawback:** Creates ordinal relationships between categories that are actually unrelated, potentially lowering model performance or causing unexpected issues.
- **One-Hot Encoding**: Creates a 0/1 variable for each category
  - **Drawback:** Increases dimensionality as the number of categories grows, potentially degrading training performance.
- **Target Encoding**: Converts categories into target statistics (focus of this note)

<br>

## 2. Target Encoding (Mean Encoding)

- Converts categories into **target statistics**
  - Binary classification: probability of 1 within each category
  - Regression: target mean within each category
- **Advantages:** No increase in dimensionality, avoids artificial ordinal relationships
- **Extensions:** Higher moments such as variance, skewness, or kurtosis can also be used

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
