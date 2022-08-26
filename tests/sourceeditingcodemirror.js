import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import SourceEditingCodeMirror from '../src/sourceeditingcodemirror';

/* global document */

describe( 'SourceEditingCodeMirror', () => {
	it( 'should be named', () => {
		expect( SourceEditingCodeMirror.pluginName ).to.equal( 'SourceEditingCodeMirror' );
	} );

	describe( 'init()', () => {
		let domElement, editor;

		beforeEach( async () => {
			domElement = document.createElement( 'div' );
			document.body.appendChild( domElement );

			editor = await ClassicEditor.create( domElement, {
				plugins: [
					Paragraph,
					Heading,
					Essentials,
					SourceEditingCodeMirror
				]
			} );
		} );

		afterEach( () => {
			domElement.remove();
			return editor.destroy();
		} );

		it( 'should load SourceEditingCodeMirror', () => {
			const SourceEditingCodeMirror = editor.plugins.get( 'SourceEditingCodeMirror' );

			expect( SourceEditingCodeMirror ).to.be.an.instanceof( SourceEditingCodeMirror );
		} );
	} );
} );
