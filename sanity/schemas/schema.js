// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Rich text annotations used in the block content editor
import annotationLinkEmail from "./annotations/linkEmail";
import annotationLinkExternal from "./annotations/linkExternal";
import annotationLinkInternal from "./annotations/linkInternal";

// Documents
import colour from "./documents/colour";
import page from "./documents/page";

// Singletons
import settings from "./singletons/settings";

// Objects
import altImage from "./objects/altImage";
import blockContent from "./objects/blockContent";
import colorGridItem from "./objects/colorGridItem";
import download from "./objects/download";
import downloadLink from "./objects/downloadLink";
import fontStyle from "./objects/fontStyle";
import fontVariant from "./objects/fontVariant";
import footer from "./objects/footer";
import linkExternal from "./objects/linkExternal";
import linkGroup from "./objects/linkGroup";
import linkInternal from "./objects/linkInternal";
import placeholderString from "./objects/placeholderString";
import menu from "./objects/menu";
import newsletter from "./objects/newsletter";
import product from "./objects/product";
import seoSingleton from "./objects/seo/singleton";
import seoStandard from "./objects/seo/standard";
import textContent from "./objects/textContent";

// Slices
import pagebuilder from "./slices/_pagebuilder";
//
import fullWidthTextSlice from "./slices/fullWidthText";
import colorBlockHeaderSlice from "./slices/colorBlockHeader";
import articleTextSlice from "./slices/articleText";
import shopCarouselSlice from "./slices/shopCarousel";

// Schema
export default createSchema({
  name: `default`,
  types: schemaTypes.concat([
    annotationLinkEmail,
    annotationLinkExternal,
    annotationLinkInternal,

    //

    colour,
    page,

    //

    settings,

    //

    altImage,
    blockContent,
    colorGridItem,
    download,
    downloadLink,
    fontStyle,
    fontVariant,
    footer,
    linkExternal,
    linkGroup,
    linkInternal,
    placeholderString,
    menu,
    newsletter,
    product,
    seoSingleton,
    seoStandard,
    textContent,

    //

    pagebuilder,
    fullWidthTextSlice,
    colorBlockHeaderSlice,
    articleTextSlice,
    shopCarouselSlice
  ])
});
