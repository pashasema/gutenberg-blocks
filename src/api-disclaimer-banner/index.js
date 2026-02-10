import { registerBlockType } from '@wordpress/blocks';
import EditComponent from './edit';
import saveFunction from './save';

registerBlockType('se/api-disclaimer-banner', {
    edit: EditComponent,
    save: saveFunction,
});
