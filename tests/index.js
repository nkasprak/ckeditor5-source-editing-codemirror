import { SourceEditingCodeMirror as SourceEditingCodeMirrorDll } from '../src';
import SourceEditingCodeMirror from '../src/sourceeditingcodemirror';

describe( 'CKEditor5 SourceEditingCodeMirror DLL', () => {
	it( 'exports SourceEditingCodeMirror', () => {
		expect( SourceEditingCodeMirrorDll ).to.equal( SourceEditingCodeMirror );
	} );
} );
