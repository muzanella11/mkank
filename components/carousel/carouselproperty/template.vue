<template>
  <div class="c-carousel-property">
    <no-ssr>
      <slick
        ref="slick"
        :options="slickOptions"
        class="carousel-property-content"
        @afterChange="handleAfterChange"
        @beforeChange="handleBeforeChange"
        @breakpoint="handleBreakpoint"
        @destroy="handleDestroy"
        @edge="handleEdge"
        @init="handleInit"
        @reInit="handleReInit"
        @setPosition="handleSetPosition"
        @swipe="handleSwipe"
        @lazyLoaded="handleLazyLoaded"
        @lazyLoadError="handleLazeLoadError"
      >
        <div class="carousel-property-content__item">
          <enem-card-property :agent-detail="true" />
        </div>

        <div class="carousel-property-content__item">
          <enem-card-property :agent-detail="true" />
        </div>

        <div class="carousel-property-content__item">
          <enem-card-property :agent-detail="true" />
        </div>
      </slick>
    </no-ssr>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
