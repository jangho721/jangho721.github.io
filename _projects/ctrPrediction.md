---
layout: page
title: Click-through rate
description: Machine learning
img: assets/img/ctr.jpg
importance: 2
category: personal
related_publications: false
# redirect: https://unsplash.com
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

<section class="container mt-5">
    <div class="row">
        <div class="col-sm mt-3 mt-md-0">
            <h2 style="font-weight: 400;">About</h2>
            <p>
            <em>CTR (Click-Through Rate)</em> is a marketing metric that measures the percentage of clicks relative to total impressions, indicating the effectiveness of marketing efforts.
            </p>
            <div class="row">
                <div class="col-sm-3 mt-3 mt-md-0 text-start">
                    {% include figure.liquid loading="eager" path="/assets/img/click.png" class="img-fluid rounded z-depth-1" %}
                </div>
            </div>
            <br>
            <!-- Summary 부분을 summary-container 클래스로 감쌈 -->
            <div class="summary-container">
                <h2 style="font-weight: 400; font-size: 1.5rem;">Summary</h2>
                <h3 style="font-weight: 400; font-size: 1rem;">Overview</h3>
                <p>To build a CTR prediction model and find a strategy that beats standard classification algorithms.</p>
                <br>
                <h3 style="font-weight: 400; font-size: 1rem;">Challenges</h3>
                <ul>
                    <li>Efficient processing of <strong>large-scale web log data</strong></li>
                    <li>Handling <strong>class imbalance</strong> in CTR prediction</li>
                    <li>Encoding <strong>high-cardinality categorical features</strong> effectively</li>
                </ul>
            </div>
            <br>
            <br>
            <br>
            <h2 style="font-weight: 400;">Dataset</h2>
            <p><a href="https://www.kaggle.com/c/avazu-ctr-prediction/data">Avazu dataset</a></p>
            <p>The dataset consists of 11 days of data, divided into two parts:</p>
            <ul>
                <li>Train set: Contains 10 days of data</li>
                <li>Test set: Contains 1 day of data</li>
            </ul>
            <p>The dataset comprises 24 categorical features and includes a total of 40,428,967 training samples.<br>
                For more details, please refer to the link above.
            </p>
            <br>
            <br>
            <h2 style="font-weight: 400;">Baseline model</h2>
            <p>
                <a href="https://lightgbm.readthedocs.io/en/latest/">LightGBM</a> has been selected as the baseline model, as it ensures <strong style="font-weight: 400;">fast training speed and stable performance</strong>.
            </p>
                In CTR prediction tasks, user characteristics change over time, leading to <strong style="font-weight: 400;">domain shift</strong> and, as a result, performance degradation (<strong style="font-weight: 400;">Staleness Problem</strong>). To address this, a periodic retraining strategy can be applied.
            <p>
            </p>
            <ul>
                <li><u>Gradient Boosting-based models</u> are frequently used as baselines in various CTR prediction competitions and are known for their stable performance.</li>
                <li>With its fast training speed, it enables efficient experimentation in model development and allows for quicker retraining during periodic updates, thereby <u>saving overall time and resources</u>.</li>
            </ul>
            <br>
            <br>
            <h2 style="font-weight: 400;">Solutions</h2>
            <p>
                애자일(agile) 의사 결정을 위한 직관적인 MMM(Marketing Mix Modeling) 솔루션<br>
                에어브릿지는 수개월에 걸쳐 멜리즈와 긴밀히 협업하며 포스트 프라이버시 시대에 맞는 채널 레벨의 마케팅 성과를 성공적으로 측정하기 위해 실행 가능한 MMM 모델을 개발하였습니다.
            </p>
            <br>
            <br>
            <h2 style="font-weight: 400;">Final thoughts</h2>
            <p>
                멜리즈는 각 채널의 진정한 기여도를 파악하고 전반적인 마케팅 효율성을 높일 수 있는 예산 분배에 대한 몇 가지 중요한 인사이트를 얻었습니다.
                사용자 참여율이 30% 이상 증가하고, 전환율도 눈에 띄게 향상되었습니다.
            </p>
            <br>
            <br>
<section>
    <h3>References</h3>
        <ol>
            <li><a href="https://lightgbm.readthedocs.io/en/stable/">LightGBM: A Highly Efficient Gradient Boosting Decision Tree</a></li>
        </ol>
</section>
