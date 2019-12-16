<template>
  <div>
    <MainKv />
    <ThemeAct />
    <MainEvent />
    <HotProduct />
    <VideoPart />
    <Recommend />
    <MomWiki />
    <Witness />
    <IgArea />
    <MemberInfo />
  </div>
</template>

<script>
import MainKv from "./HomeIndex/MainKv";
import ThemeAct from "./HomeIndex/ThemeAct";
import MainEvent from "./HomeIndex/MainEvent";
import HotProduct from "./HomeIndex/HotProduct";
import VideoPart from "./HomeIndex/VideoPart";
import Recommend from "./HomeIndex/Recommend";
import MomWiki from "./HomeIndex/MomWiki";
import Witness from "./HomeIndex/Witness";
import IgArea from "./HomeIndex/IgArea";
import MemberInfo from "./HomeIndex/MemberInfo";
export default {
  components: {
    MainKv,
    ThemeAct,
    MainEvent,
    HotProduct,
    VideoPart,
    Recommend,
    MomWiki,
    Witness,
    IgArea,
    MemberInfo
  }
};
</script>
