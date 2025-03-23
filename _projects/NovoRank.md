---
layout: page
title: Proteomics
description: Bioinformatics
img: assets/img/6.jpg
importance: 2
category: professional
related_publications: false
---

<style>
    :root {
        --summary-background-color: #f29105; /* 기본 모드 배경색 */
    }

    html[data-theme="dark"] {
        --summary-background-color: var(--global-hover-color); /* 다크 모드 배경색 */
    }

    .summary-container {
        background-color: var(--summary-background-color);
        padding: 1rem 1rem 0.25rem 1rem;
        border-radius: 1rem;
    }
</style>

<h2 style="font-weight: 400;">NovoRank</h2>
<p>
    <a href="https://github.com/jangho721/NovoRank">NovoRank</a> is a machine learning-based post-processing tool designed to improve peptide sequence identification performance.
</p>

<div class="row justify-content-center text-center">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 700px;">
        {% include figure.liquid loading="eager" path="assets/img/workflow.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption" style="text-align: left;">
    Workflow of NovoRank. (A) Analysis flow of NovoRank. (B) Two-step clustering method. Colors represent a cluster in each step. (C)
Example cluster-score (C-score) calculation in a cluster of two MS/MS spectra. (D) Deep learning model to predict a more desirable peptide
among the top two candidate peptides in a cluster.
</div>
<br>

<!-- Summary 부분을 summary-container 클래스로 감쌈 -->
<div class="summary-container">
    <h2 style="font-weight: 400; font-size: 1.5rem;">Summary</h2>
    <h3 style="font-weight: 400; font-size: 1rem;">Overview</h3>
    <p>
        <u><em>De novo</em> sequencing</u> is a crucial technique in proteomics that identifies peptide sequences directly from experimental data, without relying on existing protein databases. This method plays a key role in discovering unknown proteins and detecting mutations. However, conventional <em>de novo</em> sequencing tools have limitations in accuracy and reliability, which can compromise the trustworthiness of peptide sequence analysis results. <strong style="font-weight: 400;">NovoRank</strong> enhances <em>de novo</em> sequencing results by re-ranking candidate sequences, improving reliability and accuracy.
    </p>
    <br>
    <h3 style="font-weight: 400; font-size: 1rem;">Keywords</h3>
    <ul>
        <li>Clustering</li>
        <li>Deep Learning</li>
        <li>Data Analytics</li>
    </ul>
</div>
<br>
<br>
<br>

<h2 style="font-weight: 400;">Dataset</h2>
<p>
    <a href="https://zenodo.org/records/14046459">Experimental Data Sets</a>
</p>
<p>
    The main dataset used in NovoRank consists of MS/MS spectra (.mgf), obtained from mass spectrometry experiments and containing peptide fragmentation information.
</p>
<p>
    For more details, please refer to the link at the top of this section and <a href="https://github.com/jangho721/NovoRank/tree/main/data">here</a>.
</p>
<br>
<br>

<h2 style="font-weight: 400;">Contribution</h2>
<ol>
    <li>Developed NovoRank: A post-processing tool designed to improve peptide sequence identification by re-ranking candidate sequences through a clustering-based approach (DBSCAN), which groups similar results and enhances the accuracy of sequence identification.</li>
    <li>Proposed C-Score: A novel scoring metric that evaluates the reliability of peptide sequence predictions by considering both the consensus across clusters and the quality of individual peptide-spectrum matches (PSMs), ensuring more reliable predictions.</li>
    <li>Applied Deep Learning Models: Integrated deep learning models to refine peptide sequence predictions, improving identification accuracy by predicting the most desirable peptide from the top two candidates, leading to an 18.8% increase in correct peptide identifications compared to existing tools.</li>
    <li>Introduced Two-Step Clustering Method: Utilized a two-step clustering method to improve peptide sequence ranking by first grouping candidate sequences into clusters based on their similarities and then re-ranking the top candidates within each cluster for better accuracy.
    </li>
</ol>
<p>
</p>
<ul>
    <li>Train set: Contains 10 days of data</li>
    <li>Test set: Contains 1 day of data</li>
</ul>
<br>
<br>

<h2 style="font-weight: 400;">Results</h2>
<p>
    <a href="https://lightgbm.readthedocs.io/en/latest/">LightGBM</a> has been selected as the baseline model, as it ensures <strong style="font-weight: 400;">fast training speed and stable performance</strong>.
</p>
<p>
    In CTR prediction tasks, user characteristics change over time, leading to <strong style="font-weight: 400;">domain shift</strong> and, as a result, performance degradation (<strong style="font-weight: 400;">Staleness Problem</strong>). To address this, a periodic retraining strategy can be applied.
</p>
<ul>
    <li><u>Gradient Boosting-based models</u> are frequently used as baselines in various CTR prediction competitions and are known for their stable performance.</li>
    <li>With its fast training speed, it enables efficient experimentation in model development and allows for quicker retraining during periodic updates, thereby <u>saving overall time and resources</u>.</li>
</ul>
<br>
<br>

<section>
    <h3>References</h3>
        <ol>
            <li><a href="https://jangho721.github.io/assets/pdf/MS_NovoRank_JPR2024.pdf">NovoRank: Refinement for De Novo Peptide Sequencing Based on Spectral Clustering and Deep Learning
</a></li>
        </ol>
</section>
