import { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

const UpdatePassword = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const togglePasswordVisibility = (field) => {
        switch (field) {
            case 'current':
                setShowCurrentPassword(!showCurrentPassword);
                break;
            case 'new':
                setShowNewPassword(!showNewPassword);
                break;
            case 'confirm':
                setShowConfirmPassword(!showConfirmPassword);
                break;
            default:
                break;
        }
    };

    const handlePasswordChange = (field, e) => {
        switch (field) {
            case 'current':
                setCurrentPassword(e.target.value);
                break;
            case 'new':
                setNewPassword(e.target.value);
                break;
            case 'confirm':
                setConfirmPassword(e.target.value);
                break;
            default:
                break;
        }
    };

    const handleUpdatePassword = () => {
        // Aquí puedes agregar la lógica para actualizar la contraseña
        // Puedes enviar los valores actuales y nuevos a la API, realizar las validaciones, etc.
        console.log('Contraseña actual:', currentPassword);
        console.log('Nueva contraseña:', newPassword);
        console.log('Confirmar contraseña:', confirmPassword);
        // Aquí puedes llamar a una función o API para procesar la actualización de la contraseña
    };

    return (
        <div>
            <Form.Group className="mb-3" controlId="formCurrentPassword">
                <Form.Label>Contraseña actual</Form.Label>
                <InputGroup>
                    <Form.Control
                        type={showCurrentPassword ? 'text' : 'password'}
                        placeholder="Ingrese su contraseña actual"
                        value={currentPassword}
                        onChange={(e) => handlePasswordChange('current', e)}
                    />
                    <InputGroup.Text onClick={() => togglePasswordVisibility('current')}>
                        {showCurrentPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                    </InputGroup.Text>
                </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNewPassword">
                <Form.Label>Nueva contraseña</Form.Label>
                <InputGroup>
                    <Form.Control
                        type={showNewPassword ? 'text' : 'password'}
                        placeholder="Ingrese su nueva contraseña"
                        value={newPassword}
                        onChange={(e) => handlePasswordChange('new', e)}
                    />
                    <InputGroup.Text onClick={() => togglePasswordVisibility('new')}>
                        {showNewPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                    </InputGroup.Text>
                </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Confirmar contraseña</Form.Label>
                <InputGroup>
                    <Form.Control
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirme su nueva contraseña"
                        value={confirmPassword}
                        onChange={(e) => handlePasswordChange('confirm', e)}
                    />
                    <InputGroup.Text onClick={() => togglePasswordVisibility('confirm')}>
                        {showConfirmPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                    </InputGroup.Text>
                </InputGroup>
            </Form.Group>

            <div className="d-flex justify-content-center">
                <Button variant="primary" onClick={handleUpdatePassword}>
                    Actualizar cambios
                </Button>
            </div>
        </div>
    );
};

export default UpdatePassword;
