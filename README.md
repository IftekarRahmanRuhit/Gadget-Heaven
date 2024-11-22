# Gadget Heaven

## Description Of The Project
Gadget Heaven is a seamless, user-centric platform offering a curated collection of the latest gadgets. With easy navigation, users can explore different categories, dive into detailed product specifications, and keep track of their favorite items. Perfect for tech lovers, Gadget Heaven is the go-to place for discovering and enjoying the newest gadgets on the market.

## Live Demo
[Project Live Link](https://gadget-heaven-008.netlify.app/)

## Requirement Document
[Requirement Document Link](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf)

## React Fundamental Concepts Used
- JSX (JavaScript XML): Used to build HTML-like syntax within JavaScript, making it easier to define the UI structure.
- Components: The application is built using reusable functional components that encapsulate specific parts of the UI.
- State Management (useState): Utilized to handle local state within components, allowing for dynamic updates based on user interactions.
- Effect Hook (useEffect): Employed to handle side effects such as fetching data from APIs and updating the UI based on dependencies.
- Event Handling: React's synthetic event system is used to manage user interactions, such as clicks and form submissions.
- React Router: Enables navigation between different pages for a single-page application (SPA) experience, allowing users to navigate without full page reloads.
- useNavigate: Facilitates programmatic navigation, allowing components to redirect users based on actions.
- useParams: Extracts URL parameters for rendering dynamic content, such as detailed information about gadgets.
- NavLink: Creates navigation links with automatic active styling, improving the navigation experience and indicating the current page.

## Data Management
In Gadget Heaven, for data management i have used local storage.The shopping cart and wishlist is handled using Local Storage. The functions getStoredCart and getStoredWishList retrieve the respective data from Local Storage, while addToStoredCart and addToStoredWishList add items to the cart and wishlist, ensuring no duplicates by checking for existing products. If an item is already in the cart or wishlist, a toast notification alerts the user. The removeCart and removeWishlist functions allow users to remove items, updating the Local Storage accordingly. This approach ensures persistent data across sessions, enhancing the user experience by retaining cart and wishlist information even after page reloads.
## Features
- **Explore Gadgets**: Users can browse a collection of gadgets sorted into categories, with detailed information available for each item.
- **Save Favorites**: Users can click on the heart icon to save their favorite gadgets, making it easy to find and compare them later.
- **Gadget Details**: Each gadget has its own page with full information, including images, descriptions.
- **Easy Navigation**: The app has a simple and intuitive navigation system, allowing users to easily move between different sections.
- **Quick Shopping**: Users can add gadgets to their cart and quickly check out, making the buying process smooth and simple.
