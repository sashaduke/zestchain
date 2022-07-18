// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: zestchain/promo_count.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type PromoCount struct {
	Total uint64 `protobuf:"varint,1,opt,name=total,proto3" json:"total,omitempty"`
}

func (m *PromoCount) Reset()         { *m = PromoCount{} }
func (m *PromoCount) String() string { return proto.CompactTextString(m) }
func (*PromoCount) ProtoMessage()    {}
func (*PromoCount) Descriptor() ([]byte, []int) {
	return fileDescriptor_376765fe364565c5, []int{0}
}
func (m *PromoCount) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *PromoCount) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_PromoCount.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *PromoCount) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PromoCount.Merge(m, src)
}
func (m *PromoCount) XXX_Size() int {
	return m.Size()
}
func (m *PromoCount) XXX_DiscardUnknown() {
	xxx_messageInfo_PromoCount.DiscardUnknown(m)
}

var xxx_messageInfo_PromoCount proto.InternalMessageInfo

func (m *PromoCount) GetTotal() uint64 {
	if m != nil {
		return m.Total
	}
	return 0
}

func init() {
	proto.RegisterType((*PromoCount)(nil), "cytruslabs.zestchain.zestchain.PromoCount")
}

func init() { proto.RegisterFile("zestchain/promo_count.proto", fileDescriptor_376765fe364565c5) }

var fileDescriptor_376765fe364565c5 = []byte{
	// 157 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0xae, 0x4a, 0x2d, 0x2e,
	0x49, 0xce, 0x48, 0xcc, 0xcc, 0xd3, 0x2f, 0x28, 0xca, 0xcf, 0xcd, 0x8f, 0x4f, 0xce, 0x2f, 0xcd,
	0x2b, 0xd1, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x92, 0x4b, 0xae, 0x2c, 0x29, 0x2a, 0x2d, 0xce,
	0x49, 0x4c, 0x2a, 0xd6, 0x83, 0xab, 0x43, 0xb0, 0x94, 0x94, 0xb8, 0xb8, 0x02, 0x40, 0x9a, 0x9c,
	0x41, 0x7a, 0x84, 0x44, 0xb8, 0x58, 0x4b, 0xf2, 0x4b, 0x12, 0x73, 0x24, 0x18, 0x15, 0x18, 0x35,
	0x58, 0x82, 0x20, 0x1c, 0x27, 0xef, 0x13, 0x8f, 0xe4, 0x18, 0x2f, 0x3c, 0x92, 0x63, 0x7c, 0xf0,
	0x48, 0x8e, 0x71, 0xc2, 0x63, 0x39, 0x86, 0x0b, 0x8f, 0xe5, 0x18, 0x6e, 0x3c, 0x96, 0x63, 0x88,
	0x32, 0x4c, 0xcf, 0x2c, 0xc9, 0x28, 0x4d, 0xd2, 0x4b, 0xce, 0xcf, 0xd5, 0x47, 0x58, 0xa4, 0x8f,
	0x70, 0x50, 0x05, 0x12, 0xbb, 0xa4, 0xb2, 0x20, 0xb5, 0x38, 0x89, 0x0d, 0xec, 0x2e, 0x63, 0x40,
	0x00, 0x00, 0x00, 0xff, 0xff, 0x4b, 0x9e, 0x2f, 0x67, 0xb6, 0x00, 0x00, 0x00,
}

func (m *PromoCount) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *PromoCount) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *PromoCount) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Total != 0 {
		i = encodeVarintPromoCount(dAtA, i, uint64(m.Total))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintPromoCount(dAtA []byte, offset int, v uint64) int {
	offset -= sovPromoCount(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *PromoCount) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Total != 0 {
		n += 1 + sovPromoCount(uint64(m.Total))
	}
	return n
}

func sovPromoCount(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozPromoCount(x uint64) (n int) {
	return sovPromoCount(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *PromoCount) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPromoCount
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: PromoCount: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: PromoCount: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Total", wireType)
			}
			m.Total = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPromoCount
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Total |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipPromoCount(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPromoCount
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipPromoCount(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowPromoCount
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPromoCount
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPromoCount
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthPromoCount
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupPromoCount
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthPromoCount
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthPromoCount        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowPromoCount          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupPromoCount = fmt.Errorf("proto: unexpected end of group")
)