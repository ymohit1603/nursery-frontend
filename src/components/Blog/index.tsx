import React from 'react';
import BlogBody from './body';
import Intro from './intro';
import IndoorBody from './indoor';
import OutdoorBody from './outdoor';
import OtherBody from './other';

const IntroVal = {
  title: 'Discover the Beauty of Nature',
  description: 'Explore our collection of plant-inspired blog posts and learn how to bring the outdoors in.',
};

const IndoorIntroVal = {
  title: 'Discover the Joy of Indoor Gardening',
  description: 'Explore our collection of inspiring blog posts for indoor plant enthusiasts.',
};

const OutdoorIntroVal = {
  title: 'Discover the Joy of Outdoor Gardening',
  description: 'Explore our collection of inspiring blog posts for outdoor plant enthusiasts.',
};

const OtherIntroVal = {
  title: 'Discover the Joy of Craft Gardening',
  description: 'Explore our collection of inspiring blog posts for crafting of plants.',
};

interface BlogProps {
  type: 'indoor' | 'outdoor' | 'other' | 'main';
}

const Blog: React.FC<BlogProps> = ({ type }) => {
  let introValues;

  switch (type) {
    case 'indoor':
      introValues = IndoorIntroVal;
      break;
    case 'outdoor':
      introValues = OutdoorIntroVal;
      break;
    case 'other':
      introValues = OtherIntroVal;
      break;
    case 'main':
    default:
      introValues = IntroVal;
      break;
  }

  return (
    <div>
          <Intro title={introValues.title} description={introValues.description} />
          {type === 'main' && <BlogBody />}
          {type === 'indoor'&&<IndoorBody/>}
          {type === 'outdoor'&&<OutdoorBody/>}
          {type==='other'&&<OtherBody/>}
    </div>
  );
};

export default Blog;