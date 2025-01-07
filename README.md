# NewsApp
VITE_API_KEY=*********************

**import.meta.env.VITE_API_KEY**

**VITE prefix is compulsory**

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
></script>

useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllNews(data.articles);
        setLoading(false);
      });
  }, [category]);
