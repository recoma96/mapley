---
layout: post
title:  "How to Write Post?"
date:   2021-09-19 21:00:00 +0900
type: contents
category: Mapley
tags: ["jekyll"]
---
## In contents(Post)
make new markdown file to ```_posts``` and write config like this
**you must write type to "contents"**
```yml
---
layout: post
title: [your post title]
date: [select write date]
type: contents
category: [select category]
tags: [tag array] (ex: ["tag1", "tag2" ...])
---
```

## In Diary
make new markdown file to ```_posts``` and write config like this
```yml
---
layout: post
title: [your post title]
date: [select write date]
type: diary
tags: [tag array] (ex: ["tag1", "tag2" ...])
---
```
