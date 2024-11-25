---
layout: post
date: 2015-11-07 16:11:00-0400
inline: true
related_posts: false
---

<div>
    <div class="expandable" onclick="toggleContent(this)">[2024 and Before]</div>
    
    <div class="content" style="display: none;">
        <ul style="padding-left: 30px;">
            <li>&#x25CB;&nbsp;[Oct 2022]&nbsp; Named as a Rising Star in EECS!</li>
            <li>&#x25CB;&nbsp;[Jul 2022]&nbsp; A paper NeuroMapper got accepted to VIS'22 Posters!</li>
            <li>&#x25CB;&nbsp;[Jun 2022]&nbsp; A paper MisVis got accepted to VIS'22!</li>
            <li>&#x25CB;&nbsp;[Apr 2022]&nbsp; A paper DetectorDetective got accepted to CVPR demo!</li>
        </ul>
        <!--
        <p>
            Hoodie Thundercats retro, tote bag 8-bit Godard craft beer gastropub. Truffaut Tumblr taxidermy,
            raw denim Kickstarter sartorial dreamcatcher.
        </p>
        -->
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
