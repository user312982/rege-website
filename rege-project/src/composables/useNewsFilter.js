import { ref, computed } from 'vue'

export function useNewsFilter(articles) {
  const searchQuery = ref('')
  const selectedCategory = ref('All')
  const sortBy = ref('newest')

  const filteredArticles = computed(() => {
    let filtered = articles.value

    if (selectedCategory.value !== 'All') {
      filtered = filtered.filter(article => article.category === selectedCategory.value)
    }

    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
      )
    }

    const sorted = [...filtered]
    if (sortBy.value === 'newest') {
      sorted.sort((a, b) => b.dateValue - a.dateValue)
    } else if (sortBy.value === 'oldest') {
      sorted.sort((a, b) => a.dateValue - b.dateValue)
    } else if (sortBy.value === 'title') {
      sorted.sort((a, b) => a.title.localeCompare(b.title))
    }

    return sorted
  })

  return {
    searchQuery,
    selectedCategory,
    sortBy,
    filteredArticles
  }
}
