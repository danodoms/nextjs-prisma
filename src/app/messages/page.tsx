export default async function MessagesPage() {

    const fetchMessages = async () => {
        const res = await fetch('http://localhost:3000/api/messages');
        const data = await res.json();

        console.log('Fetched messages:', data);
        return data;
    }

    const data = await fetchMessages()

    return (
        <main className="p-8">
            {data.messages.length ? (
                <div className="flex flex-col gap-4">
                    {data.messages.map(message =>
                        <div key={message.id} className="border p-4 rounded-2xl">
                            <p>{message.content}</p>
                        </div>
                    )}
                </div>
            ) : (
                <h1>No messages found</h1>
            )}
        </main>
    );
}