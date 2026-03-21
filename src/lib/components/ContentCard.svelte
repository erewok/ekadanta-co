<script>
  export let contentType;
  export let metadata;

  import TagList from './TagList.svelte';

  const pubDate = new Date(metadata.pubdate);
  const isoDate = pubDate.toISOString();
  const formattedDate = pubDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
</script>

<article>
  <div class="card-image-wrap">
    {#if metadata.featuredImage}
      <img
        data-src="{metadata.featuredImage}"
        alt="{metadata.imageAlt ?? ''}"
        class="card-img lazy"
      />
    {:else}
      <div class="card-img-placeholder">
        <img
          src="/favicon.png"
          alt=""
          aria-hidden="true"
          class="placeholder-icon"
        />
      </div>
    {/if}
  </div>
  <div class="card-body">
    <h2>
      <a href="/{contentType}/{metadata.slug}" class="card-title-link">
        {metadata.title}
      </a>
    </h2>
    <time
      datetime="{isoDate}"
      class="card-date"
    >
      {formattedDate}
    </time>
    {#if metadata.lede}
      <p class="card-lede">{metadata.lede}</p>
    {/if}
    <TagList tags={metadata.tags} />
    <a
      href="/{contentType}/{metadata.slug}"
      class="card-read-more"
      aria-label="Read more about {metadata.title}"
    >
      Read more <span aria-hidden="true">→</span>
    </a>
  </div>
</article>

<style>
  article {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: box-shadow 150ms ease, transform 150ms ease;
  }
  @media (prefers-reduced-motion: no-preference) {
    article:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.12);
      transform: translateY(-2px);
    }
  }
  .card-image-wrap {
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 0.5rem 0.5rem 0 0;
    background: #d4e9e5;
  }
  .card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .card-img-placeholder {
    width: 100%;
    height: 100%;
    background: #d4e9e5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .placeholder-icon {
    opacity: 0.4;
    width: 40%;
    height: auto;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1.25rem;
  }
  h2 {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 0.25rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .card-title-link {
    color: #1a3a4a;
    text-decoration: none;
  }
  .card-title-link:hover {
    text-decoration: underline;
  }
  .card-date {
    font-size: 0.875rem;
    color: #64748b;
    display: block;
    margin-bottom: 0.5rem;
  }
  .card-lede {
    font-size: 0.9375rem;
    color: #475569;
    margin: 0 0 0.75rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .card-read-more {
    margin-top: auto;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #0f7a6e;
    text-decoration: none;
    padding-top: 0.75rem;
  }
  .card-read-more:hover {
    text-decoration: underline;
    color: #1a3a4a;
  }
</style>
