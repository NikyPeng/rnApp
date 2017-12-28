//
//  ETDHomepageViewManager.m
//  eTongDai
//
//  Created by cn on 2017/12/27.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "ETDHomepageViewManager.h"
#import "ETDHomepageView.h"

@implementation ETDHomepageViewManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  UIView *tempView = [ETDHomepageView createView];
  return tempView;
}

@end
