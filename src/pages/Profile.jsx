 

const Profile = () => {
  return (
    <div className="py-20 px-5">
        <h1 className="text-center">Profile</h1>
        <div id="profile-info" className="flex flex-col items-center justify-center py-10">
            <div className="w-20 h-20 overflow-hidden  bg-white rounded-full">
            <img className="w-full h-full object-cover object-top" src="https://images.unsplash.com/vector-1758380375259-b6dd11ad9049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3Jpc25hfGVufDB8fDB8fHwy" />
            </div>
            <h1 className="font-['GilroyBold'] text-lg py-1">Kanhaji</h1>
            <p className="text-zinc-400 text-sm">kanhaji@radhe.com</p>
        </div>
        <div className="flex items-center justify-between">
            <button className="bg-red-400 rounded-lg w-40 py-2 active:scale-[0.95] transition">Add Post</button>
            <button className="bg-zinc-700 rounded-lg w-40 py-2 active:scale-[0.95] transition">Logout</button>
        </div>
    </div>
  )
}

export default Profile