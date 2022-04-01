export default class DateAttribute {
  constructor(value, name, placeholder, required = false, labelWidth = '90px') {
    this.value = value
    this.name = name
    this.placeholder = placeholder
    this.required = required
    this.labelWidth = labelWidth
  }
}
