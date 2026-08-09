export default function TravelGuidePage() {
    return (
        <div className="pt-[80px]">
            <h1>Travel Guide</h1>
            <span>Welcome to the Green Sky Travels Blog </span>
            <p>
                Your ultimate travel inspiration hub is here! The Green Sky Travels Blog is dedicated to helping you explore the world with curated travel insights, expert tips, and detailed guides. Whether you're planning a trip within the UAE or dreaming of an exotic getaway, our blog has everything you need to make your journey unforgettable.
            </p>
            <p>Explore Our Blog Categories</p>
            <ul  className="flex flex-col list-disc pl-5">
                <li>Dubai and UAE Travel</li>
                <li>Worldwide Destinations</li>
                <li>Travel Tips and Tricks</li>
                <li>How to Pack Smart for Your Next Adventure</li>
                <li>Visa Assistance Tips</li>
                <li>Budget Travel Hacks for Luxury Experiences</li>
                <li>Cultural Insights and more</li>
            </ul>
            <button>Explore Travel Guide</button>
        </div>
    );
}