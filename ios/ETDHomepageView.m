//
//  ETDHomepageView.m
//  eTongDai
//
//  Created by cn on 2017/12/27.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "ETDHomepageView.h"

@implementation ETDHomepageView

- (void)awakeFromNib {
  [super awakeFromNib];
  
  self.contentSize = CGSizeMake([UIScreen mainScreen].bounds.size.width,
                                3000);
}

/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

+ (UIView *)createView {
  NSArray *array = [[NSBundle mainBundle] loadNibNamed:@"ETDHomepageView" owner:self options:nil];
  UIView *view = [array objectAtIndex:0];
  NSArray *subViews = [view subviews];
  return [subViews objectAtIndex:0];
}

@end
