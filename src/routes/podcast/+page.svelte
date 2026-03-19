<section class="podcast-section">
	<div class="podcast-layout">
		<img
			src="/images/podcast-screenshot.png"
			alt=""
			class="podcast-img"
			loading="lazy"
		/>
		<div class="podcast-info">
			<h1>Podcast</h1>
			<h2>Picture Me Coding</h2>
			<p>I appear on a weekly podcast about software with my friend Mike Mull. We cover topics relevant to our industry and also chat about music.</p>
			<a
				href="https://www.picturemecoding.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="listen-link"
			>
				Listen here
				<svg aria-hidden="true" class="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path d="M5 12h14"></path>
					<path d="M12 5l7 7-7 7"></path>
				</svg>
				<span class="sr-only">(opens in new tab)</span>
			</a>
		</div>
	</div>
</section>

<style>
.podcast-section {
  padding: 1rem 0;
}
.podcast-layout {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .podcast-layout {
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
  }
}
.podcast-img {
  width: 200px;
  height: 200px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 0.5rem;
  flex-shrink: 0;
}
@media (max-width: 767px) {
  .podcast-img {
    width: 100%;
    max-width: 200px;
    height: auto;
  }
}
.podcast-info {
  flex: 1;
}
h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a3a4a;
  margin-bottom: 0.25rem;
}
h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a3a4a;
  margin-bottom: 1rem;
}
p {
  color: #1e293b;
  line-height: 1.7;
  margin-bottom: 1rem;
}
.listen-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  color: #0f7a6e;
  font-weight: 500;
  text-decoration: none;
}
.listen-link:hover {
  text-decoration: underline;
  color: #1a3a4a;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
