import React, {useEffect, useState} from 'react'

type User = {
    id: number;
    name: string;
    email: string;
};

const Fetcher = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Search functionality
    const [query, setQuery] = useState<string>('');
    const [filteredUsers, setFilteredUsers] = useState<User[]>([])


    useEffect(()=> {
        const fetchUsers = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data);
            setLoading(false);
        }

        fetchUsers();
    }, [])


    useEffect(()=>{
        const timer = setTimeout(()=>{
            const fusers = users.filter(user => user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
            setFilteredUsers(fusers);
        }, 500)

        return () => {
            clearTimeout(timer);
        }

    },[query, users])

    if (loading) return <p>Loading...</p>

    return (
        <div>
            <div>
                <input type="text" placeholder='Search users...' 
                    value={query}
                    onChange={(e)=> setQuery(e.target.value)}
                    style={{
                      padding: '8px',
                      fontSize: '16px',
                      marginBottom: '16px',
                      display: 'block',
                      width: '100%',
                      maxWidth: '300px',
                      margin: 'auto',
                      marginTop: '2rem'
                    }}
                />

            </div>


            <h2>Fetched users:</h2>
            <ul>
                {filteredUsers
                .map(user => (
                  <li key={user.id}>
                    <strong>{user.name}</strong> — {user.email}
                  </li>
                ))}
            </ul>
        </div>
    )
}

export default Fetcher