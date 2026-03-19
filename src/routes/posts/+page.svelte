<script>
  export let data;

  import { onMount } from 'svelte';
  import lazyload from 'vanilla-lazyload';
  import ContentGrid from '$lib/components/ContentGrid.svelte';

  onMount(() => {
    if (!document.lazyloadInstance) {
      document.lazyloadInstance = new lazyload();
    } else {
      document.lazyloadInstance.update();
    }
  });
</script>

<h1>Blog</h1>
<p class="item-count">{data.posts.length} {data.posts.length === 1 ? 'post' : 'posts'}</p>
<ContentGrid contentType="posts" items={data.posts} label="Blog posts" />

<style>
  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #1a3a4a;
    margin-bottom: 0.25rem;
  }
  .item-count {
    font-size: 0.875rem;
    color: #64748b;
    margin-bottom: 1.5rem;
  }
</style>
