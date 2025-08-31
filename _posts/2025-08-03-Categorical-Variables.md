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

## 1. Motivation
Most machine learning algorithms accept **numerical inputs only**. Categorical variables must therefore be converted into numerical form before training.

---

## 2. Common Approaches

### 2.1 Ordinal Encoding
- Converts categories into integer values (e.g., {A, B, C} → {0, 1, 2})  
- **Drawback**: Imposes artificial ordinal relationships → may harm model accuracy

### 2.2 One-Hot Encoding
- Creates a separate binary feature for each category  
- **Drawback**: Increases dimensionality → can degrade training performance, especially for high-cardinality features

---

## 3. Target Encoding

### 3.1 Concept
- Replace each category with a statistic of the target variable, usually the **mean**  
- Examples:
  - Binary classification → \( P(y=1 | x=c) \)  
  - Regression → \( E[y | x=c] \)  
- **Advanced variants**: use variance, skewness, or kurtosis

### 3.2 Smoothing
- Categories with few samples may produce extreme values  
- Mitigate by blending with overall mean:
\[
\text{encoding} = \alpha \cdot p(t=1|x=c_i) + (1-\alpha) \cdot p(t=1)
\]  
- α is determined by sample size, smoothing factor, or minimum samples

---

### 3.3 Target Leakage
- Using the target to encode features can cause **overfitting**  
- Mitigation strategies:
  - **Leave-One-Out (LOO)**: exclude own target value when computing the mean  
  - **K-Fold encoding**: compute encoding using data outside the current fold  
  - **Smoothing**: acts as regularization

---

## 4. scikit-learn TargetEncoder (v1.3+)
- Implements **K-Fold target encoding** by default (`cv=5`)  
- Uses smoothing factor λ:
\[
S_i = \lambda_i \frac{n_i^Y}{n_i} + (1-\lambda_i)\frac{n^Y}{n}
\]

- λ calculation:
\[
\lambda_i = \frac{n_i}{m+n_i}, \quad m = \frac{\sigma_i^2}{\tau^2}
\]  
  - \( \sigma_i^2 \): variance of target within category i  
  - \( \tau^2 \): variance of overall target

- For numerical targets, formulas are similar with sums replacing counts

---

## 5. Practical Considerations
- Effective for **high-cardinality categorical features** (e.g., user ID, region codes)  
- Always use **cross-validation based encoding** to avoid target leakage  
- **Tune smoothing parameter** based on dataset size and variance  
- scikit-learn ≥1.3 provides ready-to-use `TargetEncoder`  

---
