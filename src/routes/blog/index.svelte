<script context="module">
  const allPosts = import.meta.glob("./*.{md,svx}");

  let body = [];
  for (let path in allPosts) {
    body.push(
      allPosts[path]().then(({ metadata }) => {
        return { path, metadata };
      })
    );
  }
  export const load = async () => {
    const posts = await Promise.all(body);

    return {
      props: {
        posts,
      },
    };
  };
</script>

<script>
  export let posts;
</script>

<ul>
  {#each posts as { path, metadata: { title } }}
    <li>
      <a
        href={path
          .replace("./", "/blog/")
          .replace(".md", "")
          .replace(".svx", "")}>{title}</a
      >
    </li>
  {/each}
</ul>
