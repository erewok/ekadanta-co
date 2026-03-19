<script>
  export let content;
  export let metadata;
  export let contentType = 'posts'; // new prop

  import TagList from './TagList.svelte';

  const { title, pubdate, featuredImage, imageAlt, tags } = metadata;
  const date = new Date(pubdate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const isoDate = new Date(pubdate).toISOString();
  const backLabel = contentType === 'projects' ? 'Projects' : 'Blog';
  const backPath = contentType === 'projects' ? '/projects' : '/posts';
</script>

<article class="prose prose-slate max-w-none" aria-labelledby="post-title">
  <h1 id="post-title" class="article-title">{title}</h1>
  <time datetime="{isoDate}" class="article-date">{date}</time>

  {#if featuredImage}
    <img
      src="{featuredImage}"
      alt="{imageAlt ?? ''}"
      loading="lazy"
      class="article-hero-img"
    />
  {/if}

  {@html content}

  <TagList {tags} />

  <a href="{backPath}" class="back-link">&#8592; Back to {backLabel}</a>
</article>

<style>
  .article-title {
    font-size: 2.25rem;
    font-weight: 700;
    color: #1a3a4a;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
  .article-date {
    display: block;
    font-size: 0.875rem;
    color: #64748b;
    margin-bottom: 1.5rem;
  }
  .article-hero-img {
    width: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
    margin-bottom: 2rem;
    max-height: 400px;
  }
  .back-link {
    display: inline-block;
    margin-top: 2rem;
    font-size: 0.875rem;
    color: #0f7a6e;
    text-decoration: none;
  }
  .back-link:hover {
    text-decoration: underline;
    color: #1a3a4a;
  }
</style>
