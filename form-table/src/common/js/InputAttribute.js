export default class InputAttribute {
  constructor(value, name, placeholder, type, required = false, labelWidth = '90px') {
    this.value = value
    this.name = name
    this.placeholder = placeholder
    this.type = type
    this.required = required
    this.labelWidth = labelWidth
  }
}
