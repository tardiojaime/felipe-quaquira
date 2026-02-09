import { ref, onMounted, onUnmounted } from "vue";

export const useMobile = () => {
  const isMobile = ref(false);

  onMounted(() => {
    isMobile.value = window.innerWidth < 550;
  });
  const onResize = () => {
    isMobile.value = window.innerWidth < 550;
  };
  window.addEventListener("resize", onResize);
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
  return { isMobile };
};
