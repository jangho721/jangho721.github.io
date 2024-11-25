---
layout: post
title: sample
date: 2015-10-22 15:59:00-0400
inline: true
related_posts: false
---

<div>
    <div class="expandable" onclick="toggleContent(this)">[Before]</div>
    
    <div class="content">
        <ul>
            <li><strong>Oct 2022</strong>: Named as a Rising Star in EECS!</li>
            <li><strong>Jul 2022</strong>: A paper NeuroMapper got accepted to VIS'22 Posters!</li>
            <li><strong>Jun 2022</strong>: A paper MisVis got accepted to VIS'22!</li>
            <li><strong>Apr 2022</strong>: A paper DetectorDetective got accepted to CVPR demo!</li>
            <li><strong>Feb 2022</strong>: A paper MisVis got accepted to CHI'22 LBW!</li>
            <li><strong>Aug 2021</strong>: A paper NeuroCartography got accepted to IEEE VIS'21.</li>
            <li><strong>Jun 2021</strong>: I started my internship at Microsoft Research.</li>
            <li><strong>Apr 2021</strong>: I have been selected as a 2021 J.P.Morgan PhD Fellow.</li>
            <li><strong>Feb 2021</strong>: A paper RECAST got accepted to CSCW'21.</li>
            <li><strong>Feb 2021</strong>: I presented our demo paper SkeletonVis in the poster session at AAAI'21.</li>
        </ul>
        <p>
            Hoodie Thundercats retro, tote bag 8-bit Godard craft beer gastropub. Truffaut Tumblr taxidermy,
            raw denim Kickstarter sartorial dreamcatcher.
        </p>
    </div>
</div>

<script>
    // 클릭 시 Before 콘텐츠를 열고 닫는 함수
    function toggleContent(element) {
        const content = element.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none"; // 닫기
        } else {
            content.style.display = "block"; // 열기
        }
    }
</script>
