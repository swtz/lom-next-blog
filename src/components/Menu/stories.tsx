import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { Menu, MenuProps } from '.';
import mock from './mock';

export default {
  title: 'Menu',
  component: Menu,
  args: mock,
} as Meta<MenuProps>;

export const Template: StoryFn<MenuProps> = (args) => {
  return (
    <div style={{ display: 'flex', flexFlow: 'column wrap', gap: '2rem' }}>
      <Menu {...args} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia non
        veritatis, doloremque consectetur numquam iure? Natus, perferendis? Ipsa
        eum, veniam sed ab minima quam, quidem ipsum exercitationem culpa
        accusantium inventore. Quaerat quibusdam possimus asperiores ipsum
        deserunt.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia non
        veritatis, doloremque consectetur numquam iure? Natus, perferendis? Ipsa
        eum, veniam sed ab minima quam, quidem ipsum exercitationem culpa
        accusantium inventore. Quaerat quibusdam possimus asperiores ipsum
        deserunt.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia non
        veritatis, doloremque consectetur numquam iure? Natus, perferendis? Ipsa
        eum, veniam sed ab minima quam, quidem ipsum exercitationem culpa
        accusantium inventore. Quaerat quibusdam possimus asperiores ipsum
        deserunt.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia non
        veritatis, doloremque consectetur numquam iure? Natus, perferendis? Ipsa
        eum, veniam sed ab minima quam, quidem ipsum exercitationem culpa
        accusantium inventore. Quaerat quibusdam possimus asperiores ipsum
        deserunt.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia non
        veritatis, doloremque consectetur numquam iure? Natus, perferendis? Ipsa
        eum, veniam sed ab minima quam, quidem ipsum exercitationem culpa
        accusantium inventore. Quaerat quibusdam possimus asperiores ipsum
        deserunt.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia non
        veritatis, doloremque consectetur numquam iure? Natus, perferendis? Ipsa
        eum, veniam sed ab minima quam, quidem ipsum exercitationem culpa
        accusantium inventore. Quaerat quibusdam possimus asperiores ipsum
        deserunt.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia non
        veritatis, doloremque consectetur numquam iure? Natus, perferendis? Ipsa
        eum, veniam sed ab minima quam, quidem ipsum exercitationem culpa
        accusantium inventore. Quaerat quibusdam possimus asperiores ipsum
        deserunt.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia non
        veritatis, doloremque consectetur numquam iure? Natus, perferendis? Ipsa
        eum, veniam sed ab minima quam, quidem ipsum exercitationem culpa
        accusantium inventore. Quaerat quibusdam possimus asperiores ipsum
        deserunt.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia non
        veritatis, doloremque consectetur numquam iure? Natus, perferendis? Ipsa
        eum, veniam sed ab minima quam, quidem ipsum exercitationem culpa
        accusantium inventore. Quaerat quibusdam possimus asperiores ipsum
        deserunt.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia non
        veritatis, doloremque consectetur numquam iure? Natus, perferendis? Ipsa
        eum, veniam sed ab minima quam, quidem ipsum exercitationem culpa
        accusantium inventore. Quaerat quibusdam possimus asperiores ipsum
        deserunt.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia non
        veritatis, doloremque consectetur numquam iure? Natus, perferendis? Ipsa
        eum, veniam sed ab minima quam, quidem ipsum exercitationem culpa
        accusantium inventore. Quaerat quibusdam possimus asperiores ipsum
        deserunt.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia non
        veritatis, doloremque consectetur numquam iure? Natus, perferendis? Ipsa
        eum, veniam sed ab minima quam, quidem ipsum exercitationem culpa
        accusantium inventore. Quaerat quibusdam possimus asperiores ipsum
        deserunt.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia non
        veritatis, doloremque consectetur numquam iure? Natus, perferendis? Ipsa
        eum, veniam sed ab minima quam, quidem ipsum exercitationem culpa
        accusantium inventore. Quaerat quibusdam possimus asperiores ipsum
        deserunt.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia non
        veritatis, doloremque consectetur numquam iure? Natus, perferendis? Ipsa
        eum, veniam sed ab minima quam, quidem ipsum exercitationem culpa
        accusantium inventore. Quaerat quibusdam possimus asperiores ipsum
        deserunt.
      </p>
      <p id="gallery">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia non
        veritatis, doloremque consectetur numquam iure? Natus, perferendis? Ipsa
        eum, veniam sed ab minima quam, quidem ipsum exercitationem culpa
        accusantium inventore. Quaerat quibusdam possimus asperiores ipsum
        deserunt.
      </p>
    </div>
  );
};
