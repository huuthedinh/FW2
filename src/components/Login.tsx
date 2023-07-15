import React, { useState } from 'react';

type Level = 1 | 2 | 3;

const pricePerLevel = {
    1: 1200,
    2: 2400,
    3: 3600,
};

function HospitalBill() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [gender, setGender] = useState<string>('Male');
    const [level, setLevel] = useState<Level>(1);
    const [days, setDays] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [errors, setErrors] = useState<string[]>([]);

    const calculatePrice = () => {
        const price = level * days * pricePerLevel[level];
        setTotalPrice(price);
    };

    const validateForm = () => {
        const errors = [];

        if (!name.trim()) {
            errors.push('Vui lòng nhập họ tên');
        }

        if (!email.trim()) {
            errors.push('Vui lòng nhập email');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.push('Email không hợp lệ');
        }

        if (errors.length) {
            setErrors(errors);
            return false;
        }

        setErrors([]);
        return true;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            calculatePrice();
        }
    };

    return (
        <div>
            <h1>Tính tiền nằm viện</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Họ tên:</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="gender">Giới tính:</label>
                    <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                        <option value="Other">Khác</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="level">Bậc nhân viên:</label>
                    <select id="level" name="level" value={level} onChange={(e) => setLevel(parseInt(e.target.value) as Level)}>
                        <option value={1}>Bậc 1 ({pricePerLevel[1]} VNĐ/ngày)</option>
                        <option value={2}>Bậc 2 ({pricePerLevel[2]} VNĐ/ngày)</option>
                        <option value={3}>Bậc 3 ({pricePerLevel[3]} VNĐ/ngày)</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="days">Số ngày nằm viện:</label>
                    <input type="number" id="days" name="days" value={days} onChange={(e) => setDays(parseInt(e.target.value))} />
                </div>
                <button type="submit">Tính tiền</button>
            </form>

            {errors.length > 0 &&
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
            }

            {totalPrice > 0 && <p> Tên {name} giới tính  {gender} cần chi trả số tiền là : {totalPrice} VNĐ</p>}
        </div>
    );
}

export default HospitalBill;