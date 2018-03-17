/**
 * 
 * 富文本编辑器组件
 * @author 
 * @date 2018/03/17
 * 
 */
<template>

<div class="publish-wrap">
	<quill-editor v-model="content"
        ref="myQuillEditor"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)">
	</quill-editor>
</div>

</template>

<script>
export default{
	name: 'editor',
	data () {
		return {
			content: ''
		}
	},
	methods: {
		onEditorBlur (quill) {
			console.log(quill)
		},
		onEditorFocus (quill) {
			console.log(quill)
		},
		onEditorReady (quill) {
			console.log(quill)
		}
	},
	components: {
	}
}
</script>

<style lang="sass">
</style>
