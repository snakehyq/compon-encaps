<script>
export default {
  name: 'BaseFiles',
  render() {
    const Tag = this.item.type
    return (
      <Tag attr={this.item.attr} form={this.form}/>
    )
  },
  props: {
    item: Object,
    form: Object
  },
  beforeMount() {
    this.$set(this.form, this.item.attr.value, '')
  }
}
</script>

<style scoped>

</style>
