// import { useEffect, useState } from "react";

// function  FetchData(){
//  const [posts,setPosts] = useState([]);

//  useEffect(()=>{
//     fetch('http://localhost:3500/posts')
//     .then(response => response.json())
//     .then(data => setPosts(data))
//     .catch(error => console.log('Error fetch data',error))
//  },[])
//  return(
//     <>
//         <div>
//             <h1>Posts FETCH DATA API</h1>
//             <ul>
//                 {posts.map((post) => (
//                     <li key={post.id}>
//                         {post.id}. {post.title}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     </>
//  );
// }
// export default FetchData;
// Cach 2 theo Axios fetch Data
import { useEffect, useState } from "react";
import axios from 'axios'; 

function FetchData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3500/posts');
        setPosts(response.data);
        // Sử dụng setTimeout để delay vai giây trước khi tắt loading
        setTimeout(() => {
          setLoading(false); 
        }, 3000);
      } catch (error) {
        console.log('Error fetching data:', error);  
        setLoading(false); 
      }
    };
    fetchPosts(); // Gọi hàm fetch dữ liệu sau khi component render lần đầu
  }, []);

  return (
    <>
      <div>
        <h1>Posts FETCH DATA API (Axios)</h1>
 {/* Hiển thị "Loading data..." trong 2 giây trước khi hiển thị dữ liệu */}
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                {post.id}. {post.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default FetchData;


// function DataFetchingComponent() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://api.example.com/data')
//       .then(response => {
//         if (!response.ok) throw new Error('Network response was not ok');
//         return response.json();
//       })
//       .then(data => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   return <div>Data: {JSON.stringify(data)}</div>;
// }
