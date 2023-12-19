import React, { useState } from 'react';

import ShareModal from './Modal/ShareModal'; 
import Button from '@components/Button/Button.tsx';

import likeIconBlue from '../../../images/icons/like.svg';
import shareIcon from '../../../images/icons/share.svg';

interface Props {
  likes: number;
}

const PostFooter: React.FC<Props> = ({ likes }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <div className="flex flex-row gap-6 justify-center lg:justify-start">

      <div className="flex flex-row gap-2 items-center">
        <img src="/like.svg" alt="Like" />
        <p className="text-gray-400 text-xs">{likes}</p>
      </div>

      <Button 
        icon={likeIconBlue.src} 
        width='w-fit' 
        bgColor="bg-sky-100" 
        paddingX="px-6" 
        paddingY="py-3" 
        textColor='text-blue-500' 
        buttonText='Like' 
      />

      <Button 
        onClick={openModal} 
        icon={shareIcon.src} 
        width='w-fit' 
        bgColor="bg-sky-100" 
        paddingX="px-6" 
        paddingY="py-3" 
        textColor='text-blue-500' 
        buttonText='Share' 
      />

      <ShareModal isVisible={isModalVisible} onClose={closeModal} />
    </div>
  );
};

export default PostFooter;
