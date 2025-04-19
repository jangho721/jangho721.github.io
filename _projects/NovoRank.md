---
layout: page
title: Hanyang University
description: Bioinformatics, Proteomics
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
    <a href="https://github.com/jangho721/NovoRank">NovoRank</a> is a machine learning-based post-processing tool designed to improve peptide identification accuracy.
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
        <u><em>De novo</em> sequencing</u> is a crucial technique in proteomics that identifies peptide sequences directly from experimental data, without relying on existing protein databases. This method plays a key role in  identifying novel peptides, such as neoantigen discovery. However, conventional <em>de novo</em> sequencing tools consider only individual spectrum and rely solely on imperfect scoring functions, often leading to erroneous peptide identifications. <strong style="font-weight: 400;">NovoRank</strong> enhances the reliability and accuracy of <em>de novo</em> sequencing by re-ranking candidate sequences using the comprehensive analysis of similar spectra, assuming that they originate from the same peptide species.
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
<br>

<ol>
    <li><strong style="font-weight: 400;">Introduced Two-Step Clustering Method</strong>: To effectively classify similar spectra, Spectral Clustering was applied for initial grouping, followed by DBSCAN to perform fine-grained clustering within the first-stage clusters, ensuring that similar spectra are more precisely grouped together.</li>
    <br>
    <li><strong style="font-weight: 400;">Proposed C-Score</strong>: A new scoring method (C-Score) was introduced to identify more reliable candidate peptides within clusters. The C-Score is calculated by normalizing the sum of each peptide's <em>de novo</em> scores by the cluster size. This method assigns higher scores to peptides with higher <em>de novo</em> scores and those that appear more frequently within the cluster, allowing for a fair comparison between clusters of different sizes. This approach ensures that peptides with a higher likelihood of being the correct sequence are ranked higher, leading to more accurate results.</li>
    <br>
    <li><strong style="font-weight: 400;">Applied Deep Learning Model</strong>: Developed a multi-modal deep learning model that simultaneously takes spectrum, sequence, and tabular data as inputs to assign the best peptide. By selecting the most desirable peptide from the top two candidates, the model improved identification accuracy.</li>
    <br>
    <li><strong style="font-weight: 400;">Applicable to Existing <em>De Novo</em> Sequencing Tools</strong>: Applied to various <em>de novo</em> peptide sequencing tools, improving peptide identification performance by enhancing the precision and recall.</li>
</ol>
<br>
<br>

<h2 style="font-weight: 400;">Results</h2>
<p> </p>
<div class="row justify-content-center text-center">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 800px;">
        {% include figure.liquid loading="eager" path="assets/img/performance.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption" style="text-align: left;">
    Precision and recall of NovoRank across three de novo peptide sequencing tools and three data sets. Precision and recall are depicted in (A) and (B), respectively, according to various score thresholds.
</div>
<br>

<ul>
    <li>Precision and recall increased by an average of 4.6% and 4.5%, with improvements of 3.8% and 3.6% specifically in Casanovo, a state-of-the-art (SOTA) model.
    </li>
    <br>
    <li>Casanovo, pNovo3, and PEAKS achieved an increase of 0.37%−0.61%, 7.52%−18.80%, and 3.06%−4.24% in correct peptide identifications, respectively. Although some peptides were missed, the number of newly identified peptides was greater.
    </li>
</ul>
<br>
<p>
    ※ <em>De novo</em> sequencing tools
</p>
<p style="font-size: 13px; margin-left: 20px; margin-bottom: 5px;">1. <strong style="font-weight: 400;">PEAKS</strong>: Algorithm-based commercial tool</p>
<p style="font-size: 13px; margin-left: 20px; margin-bottom: 5px;">2. <strong style="font-weight: 400;">pNovo3</strong>: Tool combining algorithm and machine learning</p>
<p style="font-size: 13px; margin-left: 20px; margin-bottom: 5px;">3. <strong style="font-weight: 400;">Casanovo</strong>: Deep learning-based tool using transformer (SOTA)</p>
<br>
<br>

<section>
    <h3>References</h3>
        <ol>
            <li><a href="https://jangho721.github.io/assets/pdf/MS_NovoRank_JPR2024.pdf">NovoRank: Refinement for De Novo Peptide Sequencing Based on Spectral Clustering and Deep Learning
</a></li>
        </ol>
</section>
