function PartyLeader(leader) {
    return (
        <div>
            <h2>Party Leader</h2>
            {leader && 
            <h3>{leader.name}</h3>}
        </div>
    );
};

export default PartyLeader;