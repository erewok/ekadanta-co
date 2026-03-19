<script>
  export let contentType;
  export let items;
  export let label;

  import ContentCard from './ContentCard.svelte';
</script>

<section>
  {#if items && items.length > 0}
    <ul class="content-grid" aria-label="{label}">
      {#each items as item (item.pid)}
        <li>
          <ContentCard {contentType} metadata={item} />
        </li>
      {/each}
    </ul>
  {:else}
    <p class="empty-state">Nothing here yet. Check back soon.</p>
  {/if}
</section>

<style>
  .content-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  @media (min-width: 640px) {
    .content-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (min-width: 1024px) {
    .content-grid { grid-template-columns: repeat(3, 1fr); }
  }
  li { display: flex; }
  .empty-state {
    color: #94a3b8;
    text-align: center;
    padding: 3rem 0;
  }
</style>
