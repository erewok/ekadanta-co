<script>
  export let tags = [];
</script>

{#if tags && tags.length > 0}
  <div class="tag-list">
    <span class="tag-label">Tags:</span>
    {#each tags as tag}
      <span class="tag-chip">{tag}</span>
    {/each}
  </div>
{/if}

<style>
  .tag-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.375rem;
    margin-top: 1rem;
  }
  .tag-label {
    font-size: 0.875rem;
    color: #94a3b8;
    margin-right: 0.25rem;
  }
  .tag-chip {
    background: #d4e9e5;
    color: #0f5c54;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.025em;
    padding: 0.25rem 0.625rem;
    border-radius: 9999px;
  }
</style>
