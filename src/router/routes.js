import EditorView from '@/views/EditorView.vue';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    displayName: 'الرئيسية',
    component: HomeView
  },
  {
    path: '/editor',
    name: 'editor',
    displayName: 'نشر',
    component: EditorView
  }
];

export default routes;
