import React from 'react'

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class SegmentView extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    var {selectIndex} =  this.props;
    var {tabHeight, tabWidth, tabBgColor, tabActiveBgColor, borderWidth, borderColor, fontSize, fontColor, tabActiveFontColor, borderRadius, items, onPress, views, wrapStyle} = this.props;
    return (
        <View style={[styles.header,wrapStyle]} >
        {
          items.map((item, index) => {
            /* 用于第一个tab的辅助样式 */
            var tempStyle =  {};
            var styleObj = {
              height: tabHeight,
              width: tabWidth,
              borderColor: borderColor,
              borderWidth: borderWidth,
              backgroundColor: tabBgColor
            };
            var textStyle = {color: fontColor};

            if (index === 0) {
              styleObj = {
                ...styleObj,
                borderRightColor: borderColor,
                borderTopLeftRadius: borderRadius,
                borderBottomLeftRadius: borderRadius,
                position: 'relative'
              }

              tempStyle = {
                  width: borderWidth,
                  height: tabHeight - 2 * borderWidth,
                  backgroundColor: tabBgColor,
                  position: 'absolute',
                  right: -1 * borderWidth,
                  top: 0
                }
                /* 判断是否选中 */
              if (selectIndex === index) {
                tempStyle = {
                  ...tempStyle,
                  backgroundColor: tabActiveBgColor,
                }

                styleObj = {
                  ...styleObj,
                  backgroundColor: tabActiveBgColor
                }

                textStyle = {
                  color: tabActiveFontColor
                }
              }

              return (
                <TouchableOpacity key={index} onPress={() => onPress(index, item)} activeOpacity={1}>
                  <View style={[styles.headerItem,styleObj]}  >
                      <Text style={[styles.headerItemText,textStyle]}>{item}</Text>
                      <View style = {[tempStyle]} />
                  </View>
                </TouchableOpacity>         
              )

            } else if (index === (items.length - 1)) {
              styleObj = {
                ...styleObj,
                borderTopRightRadius: borderRadius,
                borderBottomRightRadius: borderRadius
              }

            } else {
              styleObj = {
                ...styleObj,
                borderRightWidth: 0
              }
            }


            if (selectIndex === index) {
              styleObj = {
                ...styleObj,
                backgroundColor: tabActiveBgColor
              }

              textStyle = {
                color: tabActiveFontColor
              }
            }                

            return (
              <TouchableOpacity key={index} onPress={() => onPress(index, item)} activeOpacity={1}>
                <View style={[styles.headerItem,styleObj]}>
                    <Text style={[styles.headerItemText,textStyle]}>{item}</Text>
                </View>
              </TouchableOpacity>
            )              
          })
        }                        
        </View>
    )
  }
}

var styles = StyleSheet.create({
  header: {
    position: 'relative',
    overflow: 'hidden' ,
    flexDirection: 'row' ,
    alignItems: 'center' ,
    justifyContent: 'center'
  },
  headerItem: {
    width: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerItemText: {
    textAlign: 'center'
  },
  body: {
    alignItems: 'center' ,
    justifyContent: 'center' ,
    position: 'relative',
    flexDirection: 'row'
  },
  show: {
    display: 'flex'
  },
  hidden: {
    display: 'none'
  },
  viewWrap: {
    flex: 1
  }
})

SegmentView.defaultProps = {
  /* 选择元素的索引 */
  selectIndex: 0,
  /* elements array */
  items: ['A', 'B', 'C'],
  /* 高度 */
  tabHeight: 30,
  /* width of each item */
  tabWidth: 80,
  tabBgColor:'white',
  tabActiveBgColor:'#383d45',
  borderWidth: 1,
  borderColor: '#383d45',
  fontSize: 16,
  fontColor: '#383d45',
  tabActiveFontColor: 'white',
  borderRadius: 20,
  onPress: function(item) { console.log(item)},
  /* tab 对应的视图 */
  wrapStyle:{}
}


export default SegmentView