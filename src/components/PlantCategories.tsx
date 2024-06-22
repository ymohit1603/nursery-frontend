import { PlantCard } from "./PlantCard";

export const PlantCategories = () => {
  const plantCategories = [
    {
      link: "https://example.com/indoor-plants",
      imageSrc: "https://via.placeholder.com/150",
      title: "Indoor Plants",
          description: "Beautiful plants to brighten your indoor spaces.",
      buttonlabel:"Explore Indoor Plants",
    },
    {
      link: "https://example.com/outdoor-plants",
      imageSrc: "https://via.placeholder.com/150",
      title: "Outdoor Plants",
        description: "Stunning plants for your outdoor garden.",
        buttonlabel:"Explore Outdoor Plants",
    },
    {
      link: "https://example.com/other-plants",
      imageSrc: "https://via.placeholder.com/150",
      title: "Other Plants",
        description: "Unique plants for any special occasion.",
        buttonlabel:"Explore other Plants",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50 p-6 pt-0 ">
      <div className="p-8 rounded-lg  max-w-5xl w-full">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-800">Explore Plant Categories</h1>
          <p className="text-lg text-slate-700 mt-4">
            Browse our wide selection of plants, organized by category to help you find the perfect fit.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plantCategories.map((category, index) => (
            <PlantCard
              key={index}
              link={category.link}
              imageSrc={category.imageSrc}
              title={category.title}
                  description={category.description}
                  buttonlabel={category.buttonlabel}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

