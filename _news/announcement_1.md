---
layout: post
inline: true
related_posts: false
---

<div>
    <div class="expandable" onclick="toggleContent(this)"><strong>Click</strong></div>
    
    <div class="content" style="display: none;">
        <ul>
            <li>Oct 2022: Named as a Rising Star in EECS!</li>
            <li>Jul 2022: A paper NeuroMapper got accepted to VIS'22 Posters!</li>
            <li><strong>Jun 2022</strong>: A paper MisVis got accepted to VIS'22!</li>
            <li><strong>Apr 2022</strong>: A paper DetectorDetective got accepted to CVPR demo!</li>
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
