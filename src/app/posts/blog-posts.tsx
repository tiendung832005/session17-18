import React from 'react'
const posts = [
    { id: 1, title: "Accusamus beatae ad facilis", thumbnailUrl: "https://via.placeholder.com/150/92c952" },
    { id: 2, title: "Reprehenderit est deserunt", thumbnailUrl: "https://via.placeholder.com/150/8e44ad" },
    { id: 3, title: "Officia porro iure quia", thumbnailUrl: "https://via.placeholder.com/150/c0392b" },
    { id: 4, title: "Qui eius qui autem sed", thumbnailUrl: "https://via.placeholder.com/150/16a085" },
    { id: 5, title: "Epudiandae iusto deleniti", thumbnailUrl: "https://via.placeholder.com/150/27ae60" },
    { id: 6, title: "Iusto sunt nobis quasi veritatis", thumbnailUrl: "https://via.placeholder.com/600/f39c12" },
  ];
  
export default function Bai1() {
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {posts.map(post => (
          <div key={post.id} style={{ border: '1px solid #ccc', padding: '10px', width: '150px' }}>
            <img src={post.thumbnailUrl} alt={post.title} style={{ width: '100%', height: '150px' }} />
            <p>{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
