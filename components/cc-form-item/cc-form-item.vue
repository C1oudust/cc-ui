<template>
  <view class="cc-form-item" :class="{ 'cc-form-item-haserror': error }">
    <view v-if="label" class="cc-form-item-label" :style="{ width: labelWidth + 'rpx', justifyContent: lebelAlignValue }">
      <view class="cc-form-item-label-icon" v-if="leftIcon"><cc-icon :type="leftIcon" size="14"></cc-icon></view>
      <view class="cc-form-item-label-text">{{ label }}</view>
    </view>
    <view class="cc-form-item-content" :style="{ justifyContent: contentAlignValue }"><slot></slot></view>
    <view class="cc-form-item-error">{{ error }}</view>
  </view>
</template>

<script>
import Schema from 'async-validator'
export default {
  name: 'cc-form-item',
  components: {},
  props: {
    // 验证表单字段
    prop: {
      type: String,
      default: ''
    },
    // 左侧文字
    label: {
      type: String,
      default: ''
    },
    // 左侧图标
    leftIcon: {
      type: String,
      default: ''
    },
    // 左侧内容宽度
    labelWidth: {
      type: [String, Number],
      default: 160
    },
    // label对齐方式
    labelAlign: {
      type: String,
      default: 'left'
    },
    // 内容对齐方式
    contentAlign: {
      type: String,
      default: 'left'
    }
  },
  data() {
    return {
      model: {},
      rules: {},
      // 错误信息
      error: '',
      // 初始值
      initValue: '',
      // 避免点击重置按钮再次调用验证方法
      isValidate: true,
      // 初始化验证状态
      initValidateStatus: false
    }
  },
  methods: {
    toJSON() {},
    resetField() {
      this.blurValidate = false
      // TODO: 小程序端不能同步更新
      this.model[this.prop] = this.initValue
      uni.$emit('formReset', this.model)
      this.error = ''
    },
    validate(value) {
      // 当前表单值
      // 当前表单验证规则
      let rules = this.rules[this.prop]
      // 表单验证对象
      let validateAttr = {
        [this.prop]: rules
      }
      let schema = new Schema(validateAttr)
      if (this.prop) {
        return new Promise(reslove => {
          schema.validate({ [this.prop]: value }, { firstFields: true }, (errors, invalidFields) => {
            if (errors && errors.length) {
              this.error = errors[0].message
              reslove(false)
            } else {
              this.error = ''
              reslove(true)
            }
          })
        })
      }
    }
  },
  created() {
    uni.$on('formModel', val => {
      this.model = val
    })
    uni.$on('formRules', val => {
      if (val) {
        this.rules = val
        // #ifdef H5
        if (this.$children.length) {
          let rules = this.rules[this.prop]
          if (rules && rules.length) {
            // 判断trigger的类型
            rules.map(item => {
              if (Array.isArray(item.trigger) && this.isValidate) {
                if (item.trigger.includes('blur'))
                  this.$children[0].$on('validate-blur', val => {
                    this.validate(val)
                  })
                if (item.trigger.includes('change')) {
                  this.$children[0].$on('validate-change', val => {
                    this.validate(val)
                  })
                }
              } else {
                if (item.trigger === 'blur' && this.isValidate) {
                  this.$children[0].$on('validate-blur', val => {
                    this.validate(val)
                  })
                }
                if (item.trigger === 'change' && this.isValidate) {
                  this.$children[0].$on('validate-change', val => {
                    this.validate(val)
                  })
                }
              }
            })
          }
        }
        // #endif
        // #ifndef H5
        let rules = this.rules[this.prop]
        if (rules && rules.length) {
          // 判断trigger的类型
          rules.map(item => {
            if (Array.isArray(item.trigger) && this.isValidate) {
              if (item.trigger.includes('blur'))
                this.$on('validate-blur', val => {
                  this.validate(val)
                })
              if (item.trigger.includes('change')) {
                this.$on('validate-change', val => {
                  this.validate(val)
                })
              }
            } else {
              if (item.trigger === 'blur' && this.isValidate) {
                this.$on('validate-blur', val => {
                  this.validate(val)
                })
              }
              if (item.trigger === 'change' && this.isValidate) {
                this.$on('validate-change', val => {
                  this.validate(val)
                })
              }
            }
          })
        }
        // #endif
        if (this.prop) this.initValue = this.model[this.prop]
        // 分发需要检验的表单项
        if (this.prop) uni.$emit('formFieldAdd', this)
      }
    })
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {
    // label对齐方式
    lebelAlignValue() {
      if (this.labelAlign === 'left') return 'flex-start'
      else if (this.labelAlign === 'center') return 'center'
      else return 'flex-end'
    },
    // 内容对齐方式
    contentAlignValue() {
      if (this.contentAlign === 'left') return 'flex-start'
      else if (this.contentAlign === 'center') return 'center'
      else return 'flex-end'
    }
  },
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-form-item {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 11px;
  color: #303133;
  border-bottom: 1px solid #ebedf0;
  padding: #{topx(8)};
  min-height: #{topx(50)};
  &-haserror {
    padding-bottom: #{topx(16)};
  }
  .cc-cell {
    padding: #{topx(4)} #{topx(10)};
  }
  &-label {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding-left: #{topx(12)};
    &-icon {
      margin-right: #{topx(3)};
    }
  }
  &-content {
    flex: 1;
    display: flex;
    align-items: center;
  }
  &-error {
    color: #ee0a24;
    position: absolute;
    font-size: 12px;
    bottom: 0;
    left: 164rpx;
    margin-top: #{topx(10)};
  }
}
</style>
