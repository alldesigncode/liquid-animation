import {
  AnimationBuilder,
  AnimationMetadata,
  AnimationPlayer,
} from '@angular/animations';

export const easeOutCubic = 'cubic-bezier(0.33, 1, 0.68, 1)';

export class AnimationHelper {
  constructor(protected builder: AnimationBuilder) {}

  protected animate(
    animationMetaData: AnimationMetadata[],
    el
  ): AnimationPlayer {
    const animation = this.builder.build(animationMetaData);
    const player = animation.create(el);
    player.play();

    return player;
  }
}
