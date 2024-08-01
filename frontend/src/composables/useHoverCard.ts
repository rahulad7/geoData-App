import { ref } from 'vue';

const visible = ref(false);
const info = ref('');
const cardStyle = ref({ top: '0px', left: '0px' });

const showInfo = (newInfo: string, position: { x: number; y: number }) => {
  info.value = newInfo;
  cardStyle.value = { top: `${position.y - 10}px`, left: `${position.x + 10}px` }; 
  visible.value = true;
};

const hideInfo = () => {
  visible.value = false;
};

export function useHoverCard() {
  return {
    visible,
    info,
    cardStyle,
    showInfo,
    hideInfo,
  };
}


// import { ref, reactive } from 'vue';

// const visible = ref(false);
// const cardStyle = reactive({
//   top: '0px',
//   left: '0px',
// });

// const title = ref('');
// const properties = reactive<{ [key: string]: any }>({});

// const showInfo = (info: { title: string, properties: { [key: string]: any } }, position: { x: number, y: number }) => {
//   title.value = info.title;
//   Object.assign(properties, info.properties);
//   cardStyle.top = `${position.y}px`;
//   cardStyle.left = `${position.x}px`;
//   visible.value = true;
// };

// const hideInfo = () => {
//   visible.value = false;
//   title.value = '';
//   Object.keys(properties).forEach(key => delete properties[key]);
// };

// export function useHoverCard() {
//   return {
//     visible,
//     title,
//     properties,
//     cardStyle,
//     showInfo,
//     hideInfo,
//   };
// }
