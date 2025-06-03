<script lang="ts">
  import { props } from 'svelte'

  // Use $props() instead of export let
  const { data } = $props<{ data: App.PageData }>()

  // Reactive state initialization
  let rawUsers = $state(data.rawUsers)
  let rawProjects = $state(data.rawProjects)
  let rawClients = $state(data.rawClients)

  // Derived values (unchanged)
  let users = $derived({
    active: rawUsers.filter(u => u.active).length,
    inactive: rawUsers.filter(u => !u.active).length
  })

  let projects = $derived(
    rawProjects.reduce((acc, p) => {
      const status = p.Statuses?.name || 'Unknown'
      acc[status] = (acc[status] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  )

  let clients = $derived({
    multiple: rawClients.filter(c => (c.Projects?.length || 0) > 1).length,
    one: rawClients.filter(c => (c.Projects?.length || 0) === 1).length,
    none: rawClients.filter(c => (c.Projects?.length || 0) === 0).length
  })
</script>

<!-- Rest of your template remains the same -->

<!-- Keep your existing template -->